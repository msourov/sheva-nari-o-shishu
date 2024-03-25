import React from "react";

const Mission = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-3xl font-bold mb-4">
        About Sheva Nari O Shishu Kallyan Kendra
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Mission</h3>
          <p className="text-base leading-loose">
            Sheva’s mission is to promote and protect women’s rights. Its
            programs are dedicated to Support Bangladeshi women on economic
            margins to attain financial independence and become productive
            decision makers in their communities.
          </p>
        </section>
        <section className="rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Vision</h3>
          <p className="text-base leading-loose">
            Sheva visualizes an equal opportunities society in Bangladesh.
            Sheva’s operations are aimed at creating system of wealth
            distribution where women are not discriminated, oppressed and
            manipulated. This system would engage women into self-development
            through employment, confident decision making and asset building.
          </p>
        </section>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Value</h3>
        <p className="text-base leading-loose">
          Support Bangladeshi women (thus their families) in standing up for
          their rights through awareness and access to resources.
        </p>

        <ul className="list-disc pl-4">
          <li>Women have equal rights to livelihood change</li>
          <li>
            Socially responsible business practices lead to socially harmonious
            communities
          </li>
          <li>
            Workers are critical stakeholders in corporate world and have rights
            to profit sharing
          </li>
        </ul>
        <br />
        <p className="text-base leading-loose">
          In Bangladesh, women face particularly high levels of discrimination.
          Gender discrimination, defective and discriminatory laws, as well as
          ingrained religious and cultural notions all blend together to create
          an environment where women are denied many basic rights. As an
          organization founded by women, Sheva’s efforts have been devoted to
          secure and protect women’s rights. Through the implementation of
          programs designed with these factors in mind, Sheva has supported
          women in creating avenues for them to enter the world of work
          independently. Lessons learnt from working with women at grassroots
          level have formed the basis of our program structure and keep adding
          meaningful dimensions to ongoing programs.
        </p>
      </div>
    </div>
  );
};

export default Mission;
