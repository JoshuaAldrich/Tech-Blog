const router = require("express").Router();

const dbRoutes = require("./dbRoutes");
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/dashboard", dbRoutes);
router.use("/api", apiRoutes);

module.exports = router;
