const router = require("express").Router();
const controller = require("./page.js");

router.get("/", controller.getP);
router.post("/", controller.postP);
router.delete("/:buku", controller.deleteP);
router.put("/:buku", controller.updateP);

module.exports = router;
