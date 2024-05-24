const demoArray = ["US", "France", "UK"];

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <SearchBar />
      </Header>
      <Main>
        <Title />
        <SearchBar />
        <PopularSearches />
        <TrendingNow>
          <List />
        </TrendingNow>
      </Main>
    </>
  );
}

// HEADER SECTION
function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
    </header>
  );
}

// Header sub components
function Logo() {
  return (
    <div>
      <img alt="Logo" src="" />
      <span>Country facts</span>
    </div>
  );
}

// MAIN SECTION
function Main() {
  return (
    <main>
      <Title />
      <SearchBar />
      <PopularSearches />
      <TrendingNow>
        <List />
      </TrendingNow>
    </main>
  );
}

// Main sub components
function Title() {
  return (
    <div>
      <h2>Country facts</h2>
      <p>Know about countries</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <img src="" alt="search" />
      <input type="text" placeholder="Search" />
    </div>
  );
}

function PopularSearches() {
  return (
    <div>
      <h2>Popular searches</h2>
      <ul>
        {demoArray.map((item) => (
          <List item={item} />
        ))}
      </ul>
    </div>
  );
}
function TrendingNow() {
  return (
    <div>
      <h2>Trending now</h2>
      <ul>
        {demoArray.map((item) => (
          <List item={item} />
        ))}
      </ul>
    </div>
  );
}
function List({ item }) {
  return (
    <li>
      <img alt="" src="" />
      <div>
        <p>item</p>
        <p>item</p>
      </div>
    </li>
  );
}
