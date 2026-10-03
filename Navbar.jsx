import { useState } from "react"

const Rating = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const handleRating = (selectedRating) => {
    setRating(selectedRating)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      rating: rating,
      review: review,
    })
  }

  return (
    <div>
      <p className="mb-2 font-medium">
        Rate this product
      </p>

      {/* Stars */}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRating(star)}
            className="text-3xl"
          >
            {star <= rating ? "★" : "☆"}
          </button>
        ))}
      </div>

      {/* Review Box */}
      {rating > 0 && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-xl rounded-xl border p-5"
        >
          <h3 className="text-lg font-semibold">
            Why did you give {rating} star{rating > 1 ? "s" : ""}?
          </h3>

          <textarea
            value={review}
            onChange={(event) => setReview(event.target.value)}
            placeholder="Tell us about your experience..."
            className="mt-4 w-full rounded-lg border p-3 outline-none focus:ring-2"
            rows="4"
          />

          <button
            type="submit"
            className="mt-4 rounded-lg bg-black px-5 py-2 text-white"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  )
}

export default Rating