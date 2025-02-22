FROM openjdk:17-jdk
ENV PORT=8080
COPY target/spring-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]