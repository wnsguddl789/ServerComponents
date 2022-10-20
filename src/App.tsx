import "./App.css";
import MyClientComponent from "./components/MyClientComponent.client";
import MyServerComponent from "./components/MyServerComponent.server";

export default function MyOuterServerComponent() {
  return (
    <MyClientComponent color="red" intro={<p>Here's my favorite color:</p>}>
      <MyServerComponent />
    </MyClientComponent>
  );
}
