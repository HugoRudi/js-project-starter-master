// script.js

// Variablen für Benutzername und Nachricht erstellen
let username = '';
let message = '';

// Funktion für den Login
function login() {
  // Benutzernamen aus dem Eingabefeld abrufen
  username = document.getElementById('username').value;
  
  // Überprüfen, ob ein Benutzername eingegeben wurde
  if (username.trim() !== '') {
    // Login-Sektion ausblenden
    document.querySelector('.login-section').style.display = 'none';
    
    // Chat-Sektion anzeigen
    document.querySelector('.chat-section').style.display = 'block';
  }
}

// Funktion zum Senden einer Nachricht
function sendMessage() {
  // Nachricht aus dem Eingabefeld abrufen
  message = document.getElementById('message').value;
  
  // Überprüfen, ob eine Nachricht eingegeben wurde
  if (message.trim() !== '') {
    // Neue Nachricht erstellen und zum Nachrichtenfeld hinzufügen
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');

    // Benutzernamen zur Nachricht hinzufügen
    const usernameElement = document.createElement('strong');
    usernameElement.textContent = username;
    newMessage.appendChild(usernameElement);

    // Trennzeichen zur Nachricht hinzufügen
    const separator = document.createTextNode(': ');
    newMessage.appendChild(separator);

    // Nachrichtentext zur Nachricht hinzufügen
    const messageText = document.createTextNode(message);
    newMessage.appendChild(messageText);

    // Nachrichtenfeld aktualisieren
    document.getElementById('message-box').appendChild(newMessage);
    
    // Nachrichtenfeld leeren
    document.getElementById('message').value = '';
  }
}
