FROM gcr.io/distroless/java17:latest
ENV PORT=8080
COPY target/spring-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UseZGC",  "-jar", "/app.jar"]