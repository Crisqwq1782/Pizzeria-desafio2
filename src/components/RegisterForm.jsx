import { useState } from 'react'

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    // 1. JERARQUÍA SUPERIOR: ¿Los campos están vacíos?
    // Ponemos esto arriba de todo. Si se cumple, el código se corta aquí.
    if (email === '' || password === '' || (confirmPassword !== undefined && confirmPassword === '')) {
        alert("Please fill in all fields.");
        return;
    }

    // 2. JERARQUÍA MEDIA: Ya sabemos que NO están vacíos, ahora vemos el largo
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // 3. JERARQUÍA FINAL: Solo para el Registro (coincidencia)
    if (confirmPassword !== undefined && password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Si el código "sobrevive" a los 3 filtros anteriores:
    alert("¡Account created successfully!");
    console.log("Formulario enviado correctamente");
    
    // Limpiar campos
    setEmail('');
    setPassword('');
    if (setConfirmPassword) setConfirmPassword('');
};

    return (
        <form className="RegisterForm" onSubmit={handleSubmit}>
            <div>
                <h2>Register</h2>
                <br/>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="example@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} // Corregido: 'e' en lugar de 'event'
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    placeholder="Confirm your password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;

/* VE EL VIDEO DE LA CLASE PASADA EN EL MINUTO 1:10:55!!!  FALTA FORM DE REGISTER*/