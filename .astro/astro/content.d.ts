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
		"case-studies": {
"process-failure-case.md": {
	id: "process-failure-case.md";
  slug: "process-failure-case";
  body: string;
  collection: "case-studies";
  data: InferEntrySchema<"case-studies">
} & { render(): Render[".md"] };
"supplier-quality-case.md": {
	id: "supplier-quality-case.md";
  slug: "supplier-quality-case";
  body: string;
  collection: "case-studies";
  data: InferEntrySchema<"case-studies">
} & { render(): Render[".md"] };
};
"customer-quality": {
"8d-for-customer.md": {
	id: "8d-for-customer.md";
  slug: "8d-for-customer";
  body: string;
  collection: "customer-quality";
  data: InferEntrySchema<"customer-quality">
} & { render(): Render[".md"] };
"capa.md": {
	id: "capa.md";
  slug: "capa";
  body: string;
  collection: "customer-quality";
  data: InferEntrySchema<"customer-quality">
} & { render(): Render[".md"] };
"complaint-handling.md": {
	id: "complaint-handling.md";
  slug: "complaint-handling";
  body: string;
  collection: "customer-quality";
  data: InferEntrySchema<"customer-quality">
} & { render(): Render[".md"] };
};
"lab": {
"calibration.md": {
	id: "calibration.md";
  slug: "calibration";
  body: string;
  collection: "lab";
  data: InferEntrySchema<"lab">
} & { render(): Render[".md"] };
"uncertainty.md": {
	id: "uncertainty.md";
  slug: "uncertainty";
  body: string;
  collection: "lab";
  data: InferEntrySchema<"lab">
} & { render(): Render[".md"] };
};
"manufacturing-process": {
"fqc-oqc.md": {
	id: "fqc-oqc.md";
  slug: "fqc-oqc";
  body: string;
  collection: "manufacturing-process";
  data: InferEntrySchema<"manufacturing-process">
} & { render(): Render[".md"] };
"ipqc.md": {
	id: "ipqc.md";
  slug: "ipqc";
  body: string;
  collection: "manufacturing-process";
  data: InferEntrySchema<"manufacturing-process">
} & { render(): Render[".md"] };
"iqc.md": {
	id: "iqc.md";
  slug: "iqc";
  body: string;
  collection: "manufacturing-process";
  data: InferEntrySchema<"manufacturing-process">
} & { render(): Render[".md"] };
};
"quality-basics": {
"gdt-basics.md": {
	id: "gdt-basics.md";
  slug: "gdt-basics";
  body: string;
  collection: "quality-basics";
  data: InferEntrySchema<"quality-basics">
} & { render(): Render[".md"] };
"manufacturing-process-basics.md": {
	id: "manufacturing-process-basics.md";
  slug: "manufacturing-process-basics";
  body: string;
  collection: "quality-basics";
  data: InferEntrySchema<"quality-basics">
} & { render(): Render[".md"] };
"what-is-quality.md": {
	id: "what-is-quality.md";
  slug: "what-is-quality";
  body: string;
  collection: "quality-basics";
  data: InferEntrySchema<"quality-basics">
} & { render(): Render[".md"] };
};
"quality-systems": {
"iatf16949.md": {
	id: "iatf16949.md";
  slug: "iatf16949";
  body: string;
  collection: "quality-systems";
  data: InferEntrySchema<"quality-systems">
} & { render(): Render[".md"] };
"iso9001.md": {
	id: "iso9001.md";
  slug: "iso9001";
  body: string;
  collection: "quality-systems";
  data: InferEntrySchema<"quality-systems">
} & { render(): Render[".md"] };
"vda6-3.md": {
	id: "vda6-3.md";
  slug: "vda6-3";
  body: string;
  collection: "quality-systems";
  data: InferEntrySchema<"quality-systems">
} & { render(): Render[".md"] };
};
"quality-tools": {
"5why.md": {
	id: "5why.md";
  slug: "5why";
  body: string;
  collection: "quality-tools";
  data: InferEntrySchema<"quality-tools">
} & { render(): Render[".md"] };
"8d-report.md": {
	id: "8d-report.md";
  slug: "8d-report";
  body: string;
  collection: "quality-tools";
  data: InferEntrySchema<"quality-tools">
} & { render(): Render[".md"] };
"fishbone.md": {
	id: "fishbone.md";
  slug: "fishbone";
  body: string;
  collection: "quality-tools";
  data: InferEntrySchema<"quality-tools">
} & { render(): Render[".md"] };
"fmea.md": {
	id: "fmea.md";
  slug: "fmea";
  body: string;
  collection: "quality-tools";
  data: InferEntrySchema<"quality-tools">
} & { render(): Render[".md"] };
"msa.md": {
	id: "msa.md";
  slug: "msa";
  body: string;
  collection: "quality-tools";
  data: InferEntrySchema<"quality-tools">
} & { render(): Render[".md"] };
"spc.md": {
	id: "spc.md";
  slug: "spc";
  body: string;
  collection: "quality-tools";
  data: InferEntrySchema<"quality-tools">
} & { render(): Render[".md"] };
};
"reliability": {
"environmental-testing.md": {
	id: "environmental-testing.md";
  slug: "environmental-testing";
  body: string;
  collection: "reliability";
  data: InferEntrySchema<"reliability">
} & { render(): Render[".md"] };
"halt-hass.md": {
	id: "halt-hass.md";
  slug: "halt-hass";
  body: string;
  collection: "reliability";
  data: InferEntrySchema<"reliability">
} & { render(): Render[".md"] };
"mtbf.md": {
	id: "mtbf.md";
  slug: "mtbf";
  body: string;
  collection: "reliability";
  data: InferEntrySchema<"reliability">
} & { render(): Render[".md"] };
};
"statistics": {
"cp-cpk.md": {
	id: "cp-cpk.md";
  slug: "cp-cpk";
  body: string;
  collection: "statistics";
  data: InferEntrySchema<"statistics">
} & { render(): Render[".md"] };
"doe.md": {
	id: "doe.md";
  slug: "doe";
  body: string;
  collection: "statistics";
  data: InferEntrySchema<"statistics">
} & { render(): Render[".md"] };
"normal-distribution.md": {
	id: "normal-distribution.md";
  slug: "normal-distribution";
  body: string;
  collection: "statistics";
  data: InferEntrySchema<"statistics">
} & { render(): Render[".md"] };
};
"supplier-quality": {
"ppap-approval.md": {
	id: "ppap-approval.md";
  slug: "ppap-approval";
  body: string;
  collection: "supplier-quality";
  data: InferEntrySchema<"supplier-quality">
} & { render(): Render[".md"] };
"scar.md": {
	id: "scar.md";
  slug: "scar";
  body: string;
  collection: "supplier-quality";
  data: InferEntrySchema<"supplier-quality">
} & { render(): Render[".md"] };
"supplier-audit.md": {
	id: "supplier-audit.md";
  slug: "supplier-audit";
  body: string;
  collection: "supplier-quality";
  data: InferEntrySchema<"supplier-quality">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
