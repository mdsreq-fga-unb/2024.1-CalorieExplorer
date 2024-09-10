FROM maven:3.9.9-amazoncorretto-21 as build
WORKDIR /app
COPY . .
RUN mvn clean package -X -DskipTests

FROM openjdk:22-ea-10-jdk-slim
WORKDIR /app
COPY --from=build ./app/target/*.jar ./calorieexplorer.jar
ENTRYPOINT java -jar calorieexplorer.jar
