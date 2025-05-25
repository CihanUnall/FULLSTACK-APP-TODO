// // Bir middleware örneği:
// function authMiddleware(req, res, next) {
//   if (req.headers.token === "gecerli-token") {
//     next(); // Devam et
//   } else {
//     res.status(401).send("Yetkisiz erişim");
//   }
// }

// // Kullanımı:
// app.get("/dashboard", authMiddleware, (req, res) => {
//   res.send("Gizli yönetim paneli");
// });

// Middleware, belirli bir route'a erişimden önce çalışır.
// Girişte yapılan kontroller.
// Misafir kapıya geldiğinde güvenlik görevlisi şunları yapar:

// Kimsin?

// Kime geldin?

// Güvenlikten geçebilir misin?
// function securityCheck(req, res, next) {
//   if (req.isGuest && req.hasPermission) {
//     next(); // Geçiş izni ver
//   } else {
//     res.status(403).send("Giriş izni yok.");
//   }
// }
// Eğer kullanıcı zaten giriş yaptıysa login sayfasına erişemesin
export function checkNotLoggedIn(req, res, next) {
  if (req.session && req.session.user) {
    return res.redirect("/dashboard");
  }
  next();
}
