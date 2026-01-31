export default function MyButton() {
    function ButtonClicked() {
        alert("Button Clicked");
    }

   return (
    <button onClick={ButtonClicked} >I am Button</button>
  );
}
