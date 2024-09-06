type GreetingProps = {
  name: string;
  lastName: string;
}

const Greeting = ({name, lastName}: GreetingProps) => {
  return <h2>Hello, {name} {lastName}!</h2>;
};

export default Greeting;
