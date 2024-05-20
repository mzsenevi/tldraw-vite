# tldraw-vite

## Quick start (by [tldraw.dev](https://tldraw.dev/))
### 1. Installation
* Set up a React project however you normally do. [Vite recommended](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).
* Install the tldraw library using this command:
```
npm install tldraw
```

### OR
If cloning this repository you can just run the below command.
```
npm install
```

### 2. Import Styles
To import fonts and CSS for tldraw:

* Create or edit a css file called index.css
* Copy and paste this into the file:
```
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap");
@import url("tldraw/tldraw.css");

body {
  font-family: "Inter";
}
```

### 3. Render Tldraw Component
To render the Tldraw component

* Import the <Tldraw /> component from the tldraw` package
* Import the index.css CSS file from earlier
* Wrap the Tldraw component in a <div> element with the style attribute set to: { position: 'fixed', inset: 0 }
This will render a full screen canvas:

```
import { Tldraw } from 'tldraw'
import './index.css'

export default function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
	)
}
```

### 4. Running the canvas experience
You can use the tldraw SDK to craft infinite canvas experiences for the web. It's perfect for collaborative whiteboards but you can use it for lots of other things, too.
```
npm run dev
```

### Next Steps
Now that you have your canvas working, you may be wondering: what next?

You can try:

* Giving the editor a makeover by [customizing the UI](https://tldraw.dev/docs/user-interface)
* Adding your own [shapes](https://tldraw.dev/docs/shapes) and [tools](https://tldraw.dev/docs/tools)
* Providing collaboration using [multiplayer](https://github.com/tldraw/tldraw-yjs-example)
