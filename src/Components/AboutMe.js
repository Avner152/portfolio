import { Zoom } from "react-reveal";

function AboutMe() {
  return (
    <div id="about" className="about-me title">
      <section>
        <div className="row">
          <div className="col-md-4">
            <h2>about me</h2>
            <Zoom>
              <p>
                For instance, whenever I go back to the guest house during the
                morning to copy out the contract, these gentlemen are always
                still sitting there eating their breakfasts. I ought to just try
                that with my boss; I'd get kicked out on the spot.
              </p>
            </Zoom>
            <Zoom>
              <p>
                But who knows, maybe that would be the best thing for me. He'd
                fall right off his desk! And it's a funny sort of business to be
                sitting up there at your desk, talking down at your
                subordinates. I ought to just try that witht my boss; I'd get
                kicked out on the spot. But who knows, maybe that would be the
                best thing for me. He'd fall right off his desk! And it's a
                funny sort of business to be sitting up there at your desk,
                talking down at your subordinates.
              </p>
            </Zoom>
          </div>
          <div className="col-md-6">
            <img src="https://cdn-res.keymedia.com/cdn-cgi/image/w=480,h=320,fit=cover,f=auto/https://cdn-res.keymedia.com/cms/images/us/003/0223_637185010123097641.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
