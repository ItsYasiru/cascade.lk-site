import { ScrollBox, SB_Card } from "../components/utility/ScrollBox";
import SiteTitle from "../components/index/SiteTitle";

export default function IndexPage() {
  return (
    <>
      <ScrollBox>
        <SiteTitle />

        <SB_Card title='Who We Are'>
          <p>
            Cascade is a set of a like-minded group of professionals, dedicated
            to finding out solutions to all your real estate needs. The team is
            well equipped with top-end architects, structural engineers,
            engineers, electrical engineers, quantity surveyors, valuers,
            surveyors, and lawyers, financial analysts with a very strong
            network of contacts to provide efficient services to serve you
            better. Let us know your dream, Cascade will assist you to realize
            your dream. All you need to do is call us now.
          </p>
        </SB_Card>

        <SB_Card title='What we do'>
          <p>
            “Real estate property development is a not an easy task. It involves
            the selection of locations, lands, conceptualizing, architectural
            design developments, structural plan developments, council
            approvals, tendering, construction interior designing and managing
            them”. It is very important to have the correct set of professionals
            at every stage of your real estate development. Cascade will assist
            you to find the right professional at each stage to complete your
            project. We will understand your requirement, select the architects,
            select the structural engineers, even we assist to select the
            contractors and monitor construction independently to develop your
            property.” Call us to find more…
          </p>
        </SB_Card>
      </ScrollBox>
    </>
  );
}
