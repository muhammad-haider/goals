const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");



/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to goals-apis
 *     responses:
 *       200:
 *         description: Returns a data.
 */
router.route("/").get(getGoals);
router.route("/").post(setGoals);
router.route("/:id").put(updateGoals);
router.route("/:id").delete(deleteGoals);

module.exports = router;
