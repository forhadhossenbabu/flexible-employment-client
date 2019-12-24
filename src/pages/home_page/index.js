import React from "react";
import { connect } from "react-redux";
import DefaultHeader from "../../components/default_header";
import DefaultFooter from "../../components/default_footer";
import HomePageBanner from "../../components/homepage_banner";
import HomePageJobFilter from "../../components/homepage_job_filter";
import HomePageRecentJobs from "../../components/homepage_recent_jobs";
import TopCompaniesSlider from "../../components/top_companies_slider";
import RegistrationBox from "../../components/registration_box";
import Newsletter from "../../components/newsletter";

class HomePage extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    if (auth.is_authenticated && auth.role === "employe") {
      this.props.history.push("/employer-dashbord");
    }
    if (auth.is_authenticated && auth.role === "candidate") {
      this.props.history.push("/candidate-dashbord");
    }
  }

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(HomePage);
