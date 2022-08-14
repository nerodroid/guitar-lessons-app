import React from "react";
import ContentHeader from "../../components/ContentHeader";
import NewsTable from "./components/NewsTable";

const News = () => {
    return (
        <div>
            <ContentHeader title="News" breadcrumbArray={["News"]}/>
            <NewsTable/>
        </div>
    );
};

export default News;
