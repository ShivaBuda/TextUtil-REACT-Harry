const BackgroundChanger = () => {
     const text = "Hello How are you?";
     return (
          <>
               <div className="conatainer bg-primary">
                    <p>{text.split(" ").length}</p>
               </div>
          </>
     );
};

export default BackgroundChanger;
