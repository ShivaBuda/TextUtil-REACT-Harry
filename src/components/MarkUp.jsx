import { useState } from "react";

const MarkUp = () => {
     const [text, setText] = useState(123);
     const inputText = (event) => {
          setText(event.target.value);
     };

     const upperCase = () => {
          setText(text.toUpperCase());
     };

     const lowerCase = () => {
          setText(text.toLowerCase());
     };

     const clearText = () => {
          setText("");
     };
     return (
          <>
               <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="footer">
                              TextUtil
                         </a>
                         <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div
                              className="collapse navbar-collapse"
                              id="navbarSupportedContent"
                         >
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        <a
                                             className="nav-link active"
                                             aria-current="page"
                                             href="home"
                                        >
                                             Home
                                        </a>
                                   </li>
                                   <li className="nav-item">
                                        <a
                                             className="nav-link active"
                                             aria-current="page"
                                             href="home"
                                        >
                                             Contact
                                        </a>
                                   </li>
                              </ul>
                              <form className="d-flex" role="search">
                                   <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                   />
                                   <button
                                        className="btn btn-outline-success"
                                        type="submit"
                                   >
                                        Search
                                   </button>
                              </form>
                         </div>
                    </div>
               </nav>

               <div className="container my-4">
                    <div className="form-floating">
                         <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea"
                              value={text}
                              onChange={inputText}
                         ></textarea>
                         <label htmlFor="floatingTextarea">Your Text</label>
                    </div>

                    <button
                         type="button"
                         className="btn btn-success my-2 mx-2"
                         onClick={upperCase}
                    >
                         UpperCase
                    </button>
                    <button
                         onClick={lowerCase}
                         type="button"
                         className="btn btn-primary my-2"
                    >
                         LowerCase
                    </button>
                    <button
                         onClick={clearText}
                         type="button"
                         className="btn btn-success my-2 mx-2"
                    >
                         Clear
                    </button>
                    <p>Total charactor : {text.length}</p>
                    {/* <p>Total word: {text.split(" ").length}</p> */}
                    <h2>Your text preview</h2>
                    <p>{text}</p>
               </div>
          </>
     );
};

export default MarkUp;
