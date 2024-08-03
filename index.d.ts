declare namespace React {
	interface FormHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		netlify?: boolean;
	}
}
