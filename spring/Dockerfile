# Użyj oficjalnego obrazu GraalVM do kompilacji natywnej
FROM container-registry.oracle.com/graalvm/native-image:21 AS builder



# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki projektu
COPY . .

# Budowanie aplikacji Spring Native
RUN ./mvnw -Pnative native:compile -U -Djava.version=21

# Pobierz minimalny obraz Linux do uruchomienia aplikacji
FROM alpine:latest

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj skompilowany plik binarny z etapu kompilacji
COPY --from=builder /app/target/spring .

RUN apk add --no-cache libc6-compat gcompat

# Nadaj uprawnienia do uruchamiania pliku
RUN chmod +x spring

# Ustawienie domyślnego polecenia
CMD ["./spring"]
