const express = require("express");
const router = express.Router();
const CommentControllers = require("../controllers/CommentController");

router.get("/:animalId", CommentControllers.getComments);
router.post("/", CommentControllers.addOne);
router.put("/:id", CommentControllers.updateOne);
router.delete("/:id", CommentControllers.deleteOne);
/* //ver comentarios
router.get("/:commentId", (req, res) => {
  Comment.find({ where: { animalId: req.params.animalId } }).then((comment) =>
    res.send(comment)
  );
});

//agregar comentario
router.post("/:commentId", (req, res) => {
  Comment.create(req.body)
    .then((comment) => res.status(201).send(comment))
    .catch((err) => console.log(err.message));
}); */

module.exports = router;
