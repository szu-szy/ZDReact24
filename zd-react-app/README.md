### ZADANIE 1 19.06
Profil w sieci społecznościowej
  • Należy utworzyć komponent <Profile>, przy pomocy którego
  można wyświetlać informację o użytkowniku sieci
  społecznościowej. Informacje o użytkowniku znajdują się w stanie komponentu.
Opis komponentu Profile
- username — nazwa użytkownika
- tag — tag w sieci społecznościowej @
- location — miasto i państwo
- phone - numer telefonu
- avatar — odnośnik do awataru
- stats — obiekt z informacjami o aktywności

## Do zadania 1 cz. 2
• jezeli user nie posiada avatara, powinien wyswietlac domyslny
komponent (avatar ? <img> : <span>No avatar</span>)
• dopiero po rozwinieciu informacji o profilu znajomego pokazują
nam sie wszystkie informacje (domyslnie pokazujemy tylko
nazwe) (isCollapsed: false)

## zadanie 2
- Stwórz liste profili
- lista profili (obiektów typu ProfileType) bedzie przechowywana w zmiennej profiles w pliku App.tsx
- Profile type powinien zostac rozszerzony o wlasciwosc "_id: string"
- wlasciwosc "_id" bedzie przekazywana do atrybutu key w metodzie map
- Zakonczone zadanie - wyswietlana lista profili

## zadanie 3
- stwórz komponent SearchForm (sklada sie z input + button)
- input bedzie przyjmowal wartosc ze zmiennej searchTerm (przekazywana przez propsy w App.tsx)
- input bedzie oblugiwal event onChange z funkcja o nazwie handleSearchTerm (przekazywana przez propsy w App.tsx)
- skonczone zadanie to wpisanie wyszukiwanego "username" i przefiltrowania tablicy po wcisnieciu przycisku


## Zadanie 4
- stwórz Komponent Form który przechowuje formularz do tworzenia osoby
- Formularz posiada swój stan skladający się z propertisów o typie ProfileType
- Dodatkowo powinnismy dodać do stanu naszej aplikacji (App.tsx) stan przetrzymujący listę elementów która podczas uruchomienia aplikacji przypisuje liste zamockowanych danych
- nalezy dodac liste do typu naszej aplikacji
- po nacisnieciu przycisku powinno wywolac funkcje która doda obiekt o typie ProfileType do naszej listy (dzieki funkcji która bedzie utworzona w App.tsx i przekazywana jak props do komponentu Form)