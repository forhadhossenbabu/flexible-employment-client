import React from "react";
import DefaultHeader from "../../components/default_header";
import DefaultFooter from "../../components/default_footer";
import HomePageBanner from "../../components/homepage_banner";
import HomePageJobFilter from "../../components/homepage_job_filter";
import HomePageRecentJobs from "../../components/homepage_recent_jobs";
import TopCompaniesSlider from "../../components/top_companies_slider";
import RegistrationBox from "../../components/registration_box";
import Newsletter from "../../components/newsletter";

export default () => (
  <React.Fragment>
    <DefaultHeader />
    <HomePageBanner listed_job_number={`58, 246`} />
    <HomePageJobFilter />
    <HomePageRecentJobs />
    <TopCompaniesSlider />
    <RegistrationBox />
    <Newsletter />
    <DefaultFooter />
  </React.Fragment>
);
