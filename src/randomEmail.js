const generateRandomEmail = () => {
  const randomString = Math.random().toString(36).substring(2, 10); // Membuat string acak
  const domains = ["gmail.com", "yahoo.com", "outlook.com"]; // Daftar domain
  const domain = domains[Math.floor(Math.random() * domains.length)]; // Memilih domain acak

  return `${randomString}@${domain}`;
};

module.exports = generateRandomEmail;
