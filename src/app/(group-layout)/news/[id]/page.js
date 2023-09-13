
const DynamicNewsPage = ({params, searchParams}) => {

    return (
        <div>
            <h1>This is DynamicNews Page {params?.id} & params: {searchParams?.name}</h1>
        </div>
    );
};

export default DynamicNewsPage;