# Java Spring Boot and React.js Project - Rule Engine with AST

Develop a simple ***3-tier rule engine application***(Simple UI, API and Backend, Data) to determine
user eligibility based on attributes like age, department, income, spend etc.The system can use
Abstract Syntax Tree (AST) to represent conditional rules and allow for dynamic
creation,combination, and modification of these rules.

## Project Structure
```
client                          # React.js frontend
rule_engine_backend             # Spring Boot backend
```

## Prerequisites

Make sure you have the following installed:
- **Node.js**: [Download](https://nodejs.org/)
- **Maven**: [Download](https://maven.apache.org/download.cgi)
- **Java 17 or above**: [Download](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- **Spring Boot**: [Download](https://spring.io/projects/spring-boot)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone [repository-url](https://github.com/Abhinavrajsrivastav/ZeoTap_Assessment1.git)
```
```

### 2. Frontend Setup (React.js)
Navigate to the `client` folder:
```bash
cd client
```
Install the dependencies:
```bash
npm install
```
Start the React development server:
```bash
npm start
```
The React app will be running at:  
**http://localhost:3000**

### 3. Backend Setup (Spring Boot)
Navigate to the `backend` folder:
```bash
cd ../rule_engine_backend
```

Run the Spring Boot application:
```bash
mvn spring-boot:run
```
The backend API will be running at:  
**http://localhost:8080**

## API Documentation
You can test the backend API using **Postman** or **cURL**.  

Sample API endpoint:
```
POST /api/rules/create-rule
POST /api/rules/evaluate-rule

```

## Accessing the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)  
- **Backend API**: [http://localhost:8080](http://localhost:8080)

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript  
- **Backend**: Java, Spring Boot, Maven, RESTful APIs  
- **Database**: MySQL, H2  
- **DevOps**:  GitHub Actions  

## Contributing

1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-branch`.  
3. Make your changes and commit: `git commit -m 'Add feature'`.  
4. Push to the branch: `git push origin feature-branch`.  
5. Open a pull request.

## License

This project is licensed under the ZeoTap Internship(2025) Assessment Purpose.
