import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/users";

// Імпортуємо стилізовані компоненти: бекдроп, контейнер форми, кнопку закриття
import { Backdrop, LoginFormContainer, CloseButton } from "./LoginForm.styled";

const LoginForm = ({ onClose }) => {
  // Стейти для збереження введених даних
  const [username, setUsername] = useState(""); // логін
  const [password, setPassword] = useState(""); // пароль
  const [error, setError] = useState(""); // помилка, якщо логін/пароль неправильні
  const navigate = useNavigate(); // хук для переходу на інші сторінки

  // ✅ Функція для логіну
  const handleLogin = () => {
    // шукаємо користувача в масиві users по логіну і паролю
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      // Якщо користувач знайшовся, перевіряємо його роль
      if (foundUser.role === "admin") {
        navigate("/management"); // якщо адмін → перенаправляємо на менеджмент сторінку
      } else {
        // якщо не адмін → показуємо повідомлення
        alert(`Welcome ${foundUser.firstName}, role: ${foundUser.role}`);
      }
    } else {
      // Якщо користувач не знайдений → показуємо помилку
      setError("Invalid username or password");
    }
  };

  // ✅ Закриття по Escape + сабміт по Enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose(); // натиснули Escape → закриваємо форму
      if (e.key === "Enter") handleLogin(); // натиснули Enter → виконуємо логін
    };

    // Додаємо глобальний слухач клавіш
    window.addEventListener("keydown", handleKeyDown);

    // При розмонтуванні компонента видаляємо слухач, щоб не було "витоків"
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [username, password]);
  // залежності: якщо username/password змінились – оновлюємо слухач (щоб handleLogin бачив актуальні значення)

  return (
    // ✅ Бекдроп – сіра підкладка під формою. Клік по ньому закриває форму
    <Backdrop onClick={onClose}>
      {/* Контейнер форми. onClick(e.stopPropagation) блокує "пробиття" кліку в бекдроп */}
      <LoginFormContainer onClick={(e) => e.stopPropagation()}>
        {/* Х для закриття */}
        <CloseButton onClick={onClose}>✖</CloseButton>

        <h3>Login</h3>

        {/* Поле логіну */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Поле паролю */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Кнопка сабміту */}
        <button onClick={handleLogin}>Submit</button>

        {/* Якщо є помилка → показуємо її червоним текстом */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </LoginFormContainer>
    </Backdrop>
  );
};

export default LoginForm;
