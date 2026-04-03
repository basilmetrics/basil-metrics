declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"delivery-brand-tiktok-scale.md": {
	id: "delivery-brand-tiktok-scale.md";
  slug: "delivery-brand-tiktok-scale";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"food-brand-identity-framework.md": {
	id: "food-brand-identity-framework.md";
  slug: "food-brand-identity-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"roas-formula-fb-brands.md": {
	id: "roas-formula-fb-brands.md";
  slug: "roas-formula-fb-brands";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"portfolio": {
"89-degree-lighting.md": {
	id: "89-degree-lighting.md";
  slug: "89-degree-lighting";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"google-retail-search.md": {
	id: "google-retail-search.md";
  slug: "google-retail-search";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"meta-fb-high-volume.md": {
	id: "meta-fb-high-volume.md";
  slug: "meta-fb-high-volume";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"tiktok-viral-sprint.md": {
	id: "tiktok-viral-sprint.md";
  slug: "tiktok-viral-sprint";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
};
"updates": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "updates";
  data: InferEntrySchema<"updates">;
  render(): Render[".md"];
}>;

	};

	type DataEntryMap = {
		"homepage": {
"settings": {
	id: "settings";
  collection: "homepage";
  data: InferEntrySchema<"homepage">
};
};
"services": {
"a1-static-graphics": {
	id: "a1-static-graphics";
  collection: "services";
  data: InferEntrySchema<"services">
};
"a2-video-content": {
	id: "a2-video-content";
  collection: "services";
  data: InferEntrySchema<"services">
};
"a3-photo-production": {
	id: "a3-photo-production";
  collection: "services";
  data: InferEntrySchema<"services">
};
"a4-content-planning": {
	id: "a4-content-planning";
  collection: "services";
  data: InferEntrySchema<"services">
};
"b1-social-ads": {
	id: "b1-social-ads";
  collection: "services";
  data: InferEntrySchema<"services">
};
"b2-google-ads": {
	id: "b2-google-ads";
  collection: "services";
  data: InferEntrySchema<"services">
};
"b3-seo": {
	id: "b3-seo";
  collection: "services";
  data: InferEntrySchema<"services">
};
"b4-paid-pr": {
	id: "b4-paid-pr";
  collection: "services";
  data: InferEntrySchema<"services">
};
"c1-strategy-planning": {
	id: "c1-strategy-planning";
  collection: "services";
  data: InferEntrySchema<"services">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
