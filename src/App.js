import UserCard from './components/Users/UserCard'

function App() {

  // const getInfo = () => {
  //   axios({
  //     method: 'post',
  //     url: 'https://discord.com/oauth2/authorize?client_id=812384167223754802&response_type=code&scope=email%20guilds%20identify%20messages.read',
  //     data: {
  //       'grant_type': 'client_credentials',
  //       'scope': 'identify connections'
  //     },
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   })
  // }
  return (
    <>
      <UserCard />
    </>
  );
}

export default App;
