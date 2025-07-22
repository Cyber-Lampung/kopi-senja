export const user = [];

const namaOrang = [
  "Ahmad",
  "Budi",
  "Citra",
  "Dewi",
  "Eko",
  "Farah",
  "Gilang",
  "Hasan",
]; // 50 nama, akan dipakai ulang untuk 100 data

const generateRandomPassword = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const generateRandomDate = () => {
  const now = new Date();
  const past = new Date(
    now.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 365
  );
  return past.toISOString();
};

for (let i = 0; i < 50; i++) {
  const randomName =
    namaOrang[i % namaOrang.length] + Math.floor(Math.random() * 50);
  user.push({
    username: randomName,
    password: generateRandomPassword(),
    lastLogin: generateRandomDate(),
  });
}
