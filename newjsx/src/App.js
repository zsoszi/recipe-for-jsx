import React from "react";
import Img from "./Img/perfection_salad.jpg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Perfect Salad</h1>
			<img src={Img} class="img" alt="" />
			<p>
				<strong>
					2 envelopes unflavored gelatine
					<br />
					1/2 cup sugar
					<br />
					1 teaspoon salt
					<br />
					1 can (12 oz) apple juice
					<br />
					1/2 cup lemon juice
					<br />
					2 tablespoons vinegar
					<br />
					1 cup shredded carrot
					<br />
					1 cup sliced celery
					<br />
					1 cup finely shredded cabbage
					<br />
					1/2 cup chopped green pepper
					<br />1 can (4 oz) chopped pimiento
				</strong>
			</p>
			<p>1. In small saucepan, combine gelatine, sugar, and salt; mix well.</p>
			<p>
				2. Add 1 cup water. Heat over low heat, stirring constantly, until sugar
				and gelatine are dissolved. Remove from heat.
			</p>
			<p>
				3. Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water.
				Pour into medium bowl. Refrigerate 1 hour, or until mixture is
				consistency of unbeaten egg white.
			</p>
			<p>
				4. Add carrot, celery, cabbage, green pepper, and pimiento; stir until
				well combined.
			</p>
			<p>
				5. Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until
				firm.
			</p>
			<p>
				6. To unmold: Run small spatula around edge of mold; invert onto serving
				plate. Place hot dishcloth over mold; shake gently to release. Repeat,
				if necessary. Lift off mold. refrigerate until ready to serve.
			</p>
			<p>Makes 8 servings.</p>
			<hr />
			<p>
				©Copyright 1973 by The McCall Publishing Co. All rights reserved.
				Printed in U.S.A.
			</p>
		</div>
	);
}

export default App;
