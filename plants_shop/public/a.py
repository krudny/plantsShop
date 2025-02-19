import os

def rename_files(directory):
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath):
            name, ext = os.path.splitext(filename)
            # Znajdź ostatni indeks pauzy
            index = name.rfind('-')
            if index != -1:
                # Usuń wszystko od ostatniej pauzy (włącznie z pauzą)
                new_name = name[:index] + ext
                new_filepath = os.path.join(directory, new_name)
                print(f"Zmiana nazwy: {filename} -> {new_name}")
                os.rename(filepath, new_filepath)
            else:
                print(f"Brak pauzy w nazwie pliku: {filename}")

if __name__ == '__main__':
    # Ustaw ścieżkę do katalogu, w którym mają być zmieniane nazwy plików.
    directory = '.'  # bieżący katalog
    rename_files(directory)