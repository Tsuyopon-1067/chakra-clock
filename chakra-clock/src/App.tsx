import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { Clock } from "./Clock";

function App() {
  return (
    <>
      <Card height={600} margin={6}>
        <CardHeader>
          <Heading size="md"> Title1</Heading>
        </CardHeader>
        <CardBody>
          <Clock />
        </CardBody>
        <CardFooter>
          <Button>button</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
