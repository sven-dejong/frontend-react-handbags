import './App.css'
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"
import Button from "./components/button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection" disabled={false}/>
                <Button text="shop all bags" disabled={false}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product labelText="Best seller" bagImg={bag1} bagName="The handy bag" bagPrice="€400,-"/>
                <Product labelText="Best seller" bagImg={bag2} bagName="The stylish bag" bagPrice="€250,-"/>
                <Product labelText="New collection" bagImg={bag3} bagName="The simple bag" bagPrice="€300,-"/>
                <Product labelText="New collection" bagImg={bag4} bagName="The trendy bag" bagPrice="€150,-"/>
            </main>
            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
                <Tile img={brand} imgDescription="The brand"/>
                <Tile img={story} imgDescription="Our story"/>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
