
const Heading = ({title,description}) => {
    return (
        <div className="h-[500px] bg-darkpurple text-white text-center p-10 space-y-6">
            <h2 className="text-4xl font-bold"> {title} </h2>
            <p className="font-thin">
                {description}
            </p>
        </div>
    );
};

export default Heading;