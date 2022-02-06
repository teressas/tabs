import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = props => {

    // create attributes
    const [tabs, setTabs] = useState([
        {name: "Tab 1", content: "This is content for tab 1 😻"},
        {name: "Tab 2", content: "This is content for tab 2 😎 "},
        {name: "Tab 3", content: "This is content for tab 3 🦹‍♂️  "}
    ]);
    // should be 3 diff objects for 3 different tabs
    // const [isClicked, setIsClicked] = useState(false);
    const [displayContent, setDisplayContent] = useState("");

    // create call back function after user clicks tab
    const onClickHandler = (i) => {
        // setTabs();
        // setIsClicked(true);
        setDisplayContent(tabs[i].content);
        console.log(i);
    }

    // create form to render the page after the user clicks on a tab and show the pertaining content.
    return (
        <fieldset>
            <div className={styles.flexBox}>
                <div className = {styles.topBox}>
                    {tabs.map((tab,i) => { return <div key={i} className = {styles.tab} onClick={ () => onClickHandler(i) }>{tab.name}</div>})}   
                </div>
                <div className = {styles.botBox}>{displayContent}</div>
            </div>   
        </fieldset>
    )
}



export default Tabs