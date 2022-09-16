import CartIcon from './CartIcon';

export default function Header() {
    return (
        <header className="header container">
        <h1 className="heading logo">Bangkok Express</h1>
        <h3 className="subheading">Great food・Free delivery・Fair price</h3>
        <CartIcon/>
      </header>
  
    );
}