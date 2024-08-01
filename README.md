# Artists Way API

An API to serve exercises from "The Artist's Way" book to help unlock your true creative self.

## About the Exercises

"The Artist's Way" by Julia Cameron is a book designed to help individuals unlock their creativity and overcome creative blocks. The book includes a variety of exercises aimed at fostering creativity, self-discovery, and personal growth. These exercises range from writing tasks, such as morning pages and artist dates, to more introspective activities that encourage reflection and exploration of one's creative potential.

This API provides access to these exercises, allowing users to retrieve and interact with them programmatically. The exercises are categorized by week, type, and other attributes to facilitate easy access and filtering.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/artists-way-api.git
   cd artists-way-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /exercises` - Get all exercises
- `GET /exercises/week/:week` - Get exercises by week
- `GET /exercises/type/:type` - Get exercises by type
- `GET /exercises/week/:week/type/:type` - Get exercises by week and type
- `GET /exercises/random` - Get a random exercise
- `GET /exercises/search/:keyword` - Get exercises by keyword in name, description, or tags

### Example Requests

- To get all exercises:
  ```bash
  curl http://localhost:3000/exercises
  ```

- To get exercises for week 1:
  ```bash
  curl http://localhost:3000/exercises/week/1
  ```

- To get exercises of type "writing":
  ```bash
  curl http://localhost:3000/exercises/type/writing
  ```

- To get a random exercise:
  ```bash
  curl http://localhost:3000/exercises/random
  ```

- To search for exercises with the keyword "creativity":
  ```bash
  curl http://localhost:3000/exercises/search/creativity
  ```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License.
