FROM maven:3.8.3-openjdk-11-slim AS build

RUN echo "The ARG variable value is $TWILIO_KEY"

WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim

COPY --from=build /app/target/dsmeta-0.0.1-SNAPSHOT.jar dsmeta-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "/dsmeta-0.0.1-SNAPSHOT.jar"]
