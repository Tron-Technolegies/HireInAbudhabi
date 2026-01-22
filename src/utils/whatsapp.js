export const handleChatClick = () => {
  const phoneNumber = "+971501093009"; // Replace with the actual phone number
  const message = `Hello! I would like to Know more about Hire In Abudhabi`; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleChatClickCustom = (content) => {
  const phoneNumber = "+971501093009"; // Replace with the actual phone number
  const message = content; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
