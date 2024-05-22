import { type ActionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
	console.log(request);
	let formData = await request.formData();
	let json = Object.fromEntries(formData);

	console.log(json);

	return redirect("/");
}

export default function Index() {
	return (
		<div className="p-10">
			<h1 className="text-5xl">Dojo</h1>
			<p className="mt-2 text-lg text-gray-400">
				Learnings and doings. Updated Weekly.
			</p>

			<div className="my-8 border p-3">
				<Form method="post">
					<p className="italic">Create an entry</p>
					<div className="mt-4">
						<input
							type="date"
							name="date"
							className="text-gray-700"
						/>
					</div>
					<div className="mt-2 space-x-6">
						<label>
							<input
								className="mr-1"
								type="radio"
								name="category"
								value="work"
							/>
							Work
						</label>
						<label>
							<input
								className="mr-1"
								type="radio"
								name="category"
								value="learning"
							/>
							Learning
						</label>
						<label>
							<input
								className="mr-1"
								type="radio"
								name="category"
								value="interesting-thing"
							/>
							Interesting thing
						</label>
					</div>

					<div className="mt-2">
						<textarea
							name="text"
							className="w-full text-gray-700"
							placeholder="Write your entry..."
						/>
					</div>

					<div className="mt-1 text-right">
						<button
							className="bg-blue-500 px-4 py-1 font-medium text-white"
							type="submit"
						>
							Save
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}
