export interface ICategories {
    object: string;
    parent_category: {
        name: string;
        prio: number;
        id: number;
        id_parent: number;
        label: string;
        seo: {
            permalink: string;
            title: string;
            description: string;
            keywords: string;
        };
        attributes: {};
    };
    categories: [
        {
            name: string;
            prio: number;
            id: number;
            id_parent: number;
            label: string;
            seo: {
                permalink: string;
                title: string;
                description: string;
                keywords: string;
            };
            attributes: {};
        }
    ];
}

export interface IProductsInCategory {
    object: string;
    category: {
        id: number;
        name: string;
        prio: number;
        id_parent: number;
        label: string;
        seo: {
            permalink: string;
            title: string;
            description: string;
            keywords: string;
        };
        attributes: {};
        products: {
            [key: string]: {
                object: string;
                id: number;
                name: string;
                creation_date: string;
                class: string;
                seo: {
                    permalink: string;
                    title: string;
                    description: string;
                    keywords: string;
                };
                availability: {
                    quantity: number;
                    quantity_warning: number;
                    allow_override: number;
                    active: number;
                };
                metadata: {
                    element_number: string;
                    taxclass: {
                        name: string;
                        calculation: string;
                        value: number;
                    };
                    length: number;
                    width: number;
                    height: number;
                    weight: number;
                    notes: string;
                };
                attributes: {
                    [key: string]: {
                        type: string;
                        id: number;
                        name: string;
                        label: string;
                        value: string | number;
                    };
                };
                variations: {
                    [key: string]: {
                        object: string;
                        id: number;
                        name: string;
                        creation_date: string;
                        class: string;
                        seo: {
                            permalink: string;
                            title: string;
                            description: string;
                            keywords: string;
                        };
                        availability: {
                            quantity: number;
                            quantity_warning: number;
                            allow_override: number;
                            active: number;
                        };
                        metadata: {
                            element_number: string;
                            taxclass: {
                                name: string;
                                calculation: string;
                                value: number;
                            };
                            length: number;
                            width: number;
                            height: number;
                            weight: number;
                            notes: string;
                        };
                        attributes: {
                            [key: string]: {
                                type: string;
                                id: number;
                                name: string;
                                label: string;
                                value: string | number;
                            };
                        };
                        variations: {};
                    };
                };
            };
        };
    };
}

export interface IContentsInCategory {
    object: string;
    category: {
        id: number;
        name: string;
        prio: number;
        id_parent: number;
        label: string;
        seo: {
            permalink: string;
            title: string;
            description: string;
            keywords: string;
        };
        attributes: {};
    };
    contents: {
        [key: string]: {
            object: string;
            id: number;
            name: string;
            creation_date: string;
            class: string;
            seo: {
                permalink: string;
                title: string;
                description: string;
                keywords: string;
            };
            attributes: {
                [key: string]: {
                    type: string;
                    id: number;
                    name: string;
                    label: string;
                    value: string | number;
                };
            };
            variations: {};
        };
    };
}

export interface IShopobjectsInCategory {
    object: string;
    category: {
        id: number;
        name: string;
        prio: number;
        id_parent: number;
        label: string;
        seo: {
            permalink: string;
            title: string;
            description: string;
            keywords: string;
        };
        attributes: {};
    };
    products: {
        [key: string]: {
            object: string;
            id: number;
            name: string;
            creation_date: string;
            class: string;
            seo: {
                permalink: string;
                title: string;
                description: string;
                keywords: string;
            };
            availability: {
                quantity: number;
                quantity_warning: number;
                allow_override: number;
                active: number;
            };
            metadata: {
                element_number: string;
                taxclass: {
                    name: string;
                    calculation: string;
                    value: number;
                };
                length: number;
                width: number;
                height: number;
                weight: number;
                notes: string;
            };
            attributes: {
                [key: string]: {
                    type: string;
                    id: number;
                    name: string;
                    label: string;
                    value: string | number;
                };
            };
            variations: {
                [key: string]: {
                    object: string;
                    id: number;
                    name: string;
                    creation_date: string;
                    class: string;
                    seo: {
                        permalink: string;
                        title: string;
                        description: string;
                        keywords: string;
                    };
                    availability: {
                        quantity: number;
                        quantity_warning: number;
                        allow_override: number;
                        active: number;
                    };
                    metadata: {
                        element_number: string;
                        taxclass: {
                            name: string;
                            calculation: string;
                            value: number;
                        };
                        length: number;
                        width: number;
                        height: number;
                        weight: number;
                        notes: string;
                    };
                    attributes: {
                        [key: string]: {
                            type: string;
                            id: number;
                            name: string;
                            label: string;
                            value: string | number;
                        };
                    };
                    variations: {};
                };
            };
        };
    };
    contents: {
        [key: string]: {
            object: string;
            id: number;
            name: string;
            creation_date: string;
            class: string
            seo: {
                permalink: string;
                title: string;
                description: string;
                keywords: string;
            };
            attributes: {
                [key: string]: {
                    type: string;
                    id: number;
                    name: string;
                    label: string;
                    value: string | number;
                };
            };
            variations: object;
        };
    };
}

export interface IDumpCategory {
    object: string;
    parent_category: {
        name: string;
        prio: number;
        id: number;
        id_parent: number;
        label: string;
        path: {
            name: string;
            nodes: [
                {
                    id: number;
                    name: string;
                }
            ];
        };
        seo: {
            permalink: string;
            title: string;
            description: string;
            keywords: string;
        };
        attributes: {};
    };
    shop_categories: {};
    products_in_category: {
        category: {
            id_category: number;
            name: string;
        };
        products: {
            [key: string]: {
                object: string;
                id: number;
                name: string;
                creation_date: string;
                class: string;
                seo: {
                    permalink: string;
                    title: string;
                    description: string;
                    keywords: string;
                };
                availability: {
                    quantity: number;
                    quantity_warning: number;
                    allow_override: number;
                    active: number;
                };
                metadata: {
                    element_number: string;
                    taxclass: {
                        name: string;
                        calculation: string;
                        value: number;
                    };
                    length: number;
                    width: number;
                    height: number;
                    weight: number;
                    notes: string;
                };
                attributes: {
                    [key: string]: {
                        type: string;
                        id: number;
                        name: string;
                        label: string;
                        value: string | number;
                    };
                };
                variations: {
                    [key: string]: {
                        object: string;
                        id: number;
                        name: string;
                        creation_date: string;
                        class: string;
                        seo: {
                            permalink: string;
                            title: string;
                            description: string;
                            keywords: string;
                        };
                        availability: {
                            quantity: number;
                            quantity_warning: number;
                            allow_override: number;
                            active: number;
                        };
                        metadata: {
                            element_number: string;
                            taxclass: {
                                name: string;
                                calculation: string;
                                value: number;
                            };
                            length: number;
                            width: number;
                            height: number;
                            weight: number;
                            notes: string;
                        };
                        attributes: {
                            [key: string]: {
                                type: string;
                                id: number;
                                name: string;
                                label: string
                                value: string | number;
                            };
                        };
                        variations: {};
                    };
                };
            };
        };
    };
    contents_in_category: {
        category: {
            id_category: number;
            name: string;
        };
        contents: {
            [key: string]: {
                object: string;
                id: number;
                name: string;
                creation_date: string;
                class: string;
                seo: {
                    permalink: string;
                    title: string;
                    description: string;
                    keywords: string;
                };
                attributes: {
                    [key: string]: {
                        type: string;
                        id: number;
                        name: string;
                        label: string;
                        value: string | number;
                    };
                };
                variations: {};
            };
        };
    };
}
