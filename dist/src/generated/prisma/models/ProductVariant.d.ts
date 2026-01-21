import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductVariantModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductVariantPayload>;
export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null;
    _avg: ProductVariantAvgAggregateOutputType | null;
    _sum: ProductVariantSumAggregateOutputType | null;
    _min: ProductVariantMinAggregateOutputType | null;
    _max: ProductVariantMaxAggregateOutputType | null;
};
export type ProductVariantAvgAggregateOutputType = {
    stock: number | null;
};
export type ProductVariantSumAggregateOutputType = {
    stock: number | null;
};
export type ProductVariantMinAggregateOutputType = {
    sku: string | null;
    size: $Enums.Size | null;
    stock: number | null;
    productId: string | null;
};
export type ProductVariantMaxAggregateOutputType = {
    sku: string | null;
    size: $Enums.Size | null;
    stock: number | null;
    productId: string | null;
};
export type ProductVariantCountAggregateOutputType = {
    sku: number;
    size: number;
    stock: number;
    productId: number;
    _all: number;
};
export type ProductVariantAvgAggregateInputType = {
    stock?: true;
};
export type ProductVariantSumAggregateInputType = {
    stock?: true;
};
export type ProductVariantMinAggregateInputType = {
    sku?: true;
    size?: true;
    stock?: true;
    productId?: true;
};
export type ProductVariantMaxAggregateInputType = {
    sku?: true;
    size?: true;
    stock?: true;
    productId?: true;
};
export type ProductVariantCountAggregateInputType = {
    sku?: true;
    size?: true;
    stock?: true;
    productId?: true;
    _all?: true;
};
export type ProductVariantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductVariantCountAggregateInputType;
    _avg?: ProductVariantAvgAggregateInputType;
    _sum?: ProductVariantSumAggregateInputType;
    _min?: ProductVariantMinAggregateInputType;
    _max?: ProductVariantMaxAggregateInputType;
};
export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
    [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductVariant[P]> : Prisma.GetScalarType<T[P], AggregateProductVariant[P]>;
};
export type ProductVariantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithAggregationInput | Prisma.ProductVariantOrderByWithAggregationInput[];
    by: Prisma.ProductVariantScalarFieldEnum[] | Prisma.ProductVariantScalarFieldEnum;
    having?: Prisma.ProductVariantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductVariantCountAggregateInputType | true;
    _avg?: ProductVariantAvgAggregateInputType;
    _sum?: ProductVariantSumAggregateInputType;
    _min?: ProductVariantMinAggregateInputType;
    _max?: ProductVariantMaxAggregateInputType;
};
export type ProductVariantGroupByOutputType = {
    sku: string;
    size: $Enums.Size;
    stock: number;
    productId: string;
    _count: ProductVariantCountAggregateOutputType | null;
    _avg: ProductVariantAvgAggregateOutputType | null;
    _sum: ProductVariantSumAggregateOutputType | null;
    _min: ProductVariantMinAggregateOutputType | null;
    _max: ProductVariantMaxAggregateOutputType | null;
};
type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductVariantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductVariantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductVariantGroupByOutputType[P]>;
}>>;
export type ProductVariantWhereInput = {
    AND?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    OR?: Prisma.ProductVariantWhereInput[];
    NOT?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    sku?: Prisma.StringFilter<"ProductVariant"> | string;
    size?: Prisma.EnumSizeFilter<"ProductVariant"> | $Enums.Size;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    productId?: Prisma.StringFilter<"ProductVariant"> | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type ProductVariantOrderByWithRelationInput = {
    sku?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    sku?: string;
    AND?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    OR?: Prisma.ProductVariantWhereInput[];
    NOT?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    size?: Prisma.EnumSizeFilter<"ProductVariant"> | $Enums.Size;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    productId?: Prisma.StringFilter<"ProductVariant"> | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "sku">;
export type ProductVariantOrderByWithAggregationInput = {
    sku?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    _count?: Prisma.ProductVariantCountOrderByAggregateInput;
    _avg?: Prisma.ProductVariantAvgOrderByAggregateInput;
    _max?: Prisma.ProductVariantMaxOrderByAggregateInput;
    _min?: Prisma.ProductVariantMinOrderByAggregateInput;
    _sum?: Prisma.ProductVariantSumOrderByAggregateInput;
};
export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductVariantScalarWhereWithAggregatesInput | Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductVariantScalarWhereWithAggregatesInput | Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    sku?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
    size?: Prisma.EnumSizeWithAggregatesFilter<"ProductVariant"> | $Enums.Size;
    stock?: Prisma.IntWithAggregatesFilter<"ProductVariant"> | number;
    productId?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
};
export type ProductVariantCreateInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    product: Prisma.ProductCreateNestedOneWithoutProductVariantInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutVariantInput;
};
export type ProductVariantUncheckedCreateInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    productId: string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutVariantInput;
};
export type ProductVariantUpdateInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutProductVariantNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutVariantNestedInput;
};
export type ProductVariantUncheckedUpdateInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutVariantNestedInput;
};
export type ProductVariantCreateManyInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    productId: string;
};
export type ProductVariantUpdateManyMutationInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantUncheckedUpdateManyInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductVariantScalarRelationFilter = {
    is?: Prisma.ProductVariantWhereInput;
    isNot?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantListRelationFilter = {
    every?: Prisma.ProductVariantWhereInput;
    some?: Prisma.ProductVariantWhereInput;
    none?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductVariantCountOrderByAggregateInput = {
    sku?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type ProductVariantAvgOrderByAggregateInput = {
    stock?: Prisma.SortOrder;
};
export type ProductVariantMaxOrderByAggregateInput = {
    sku?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type ProductVariantMinOrderByAggregateInput = {
    sku?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type ProductVariantSumOrderByAggregateInput = {
    stock?: Prisma.SortOrder;
};
export type ProductVariantCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ProductVariantUpsertWithoutOrderItemsInput;
    connect?: Prisma.ProductVariantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductVariantUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ProductVariantUpdateWithoutOrderItemsInput>, Prisma.ProductVariantUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput | Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput | Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type EnumSizeFieldUpdateOperationsInput = {
    set?: $Enums.Size;
};
export type ProductVariantCreateWithoutOrderItemsInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    product: Prisma.ProductCreateNestedOneWithoutProductVariantInput;
};
export type ProductVariantUncheckedCreateWithoutOrderItemsInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    productId: string;
};
export type ProductVariantCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutOrderItemsInput>;
};
export type ProductVariantUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutOrderItemsInput, Prisma.ProductVariantUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ProductVariantWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutOrderItemsInput, Prisma.ProductVariantUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductVariantUpdateWithoutOrderItemsInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutProductVariantNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutOrderItemsInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductVariantCreateWithoutProductInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutVariantInput;
};
export type ProductVariantUncheckedCreateWithoutProductInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutVariantInput;
};
export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
};
export type ProductVariantCreateManyProductInputEnvelope = {
    data: Prisma.ProductVariantCreateManyProductInput | Prisma.ProductVariantCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutProductInput, Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
};
export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutProductInput, Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
};
export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductVariantScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyWithoutProductInput>;
};
export type ProductVariantScalarWhereInput = {
    AND?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
    OR?: Prisma.ProductVariantScalarWhereInput[];
    NOT?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
    sku?: Prisma.StringFilter<"ProductVariant"> | string;
    size?: Prisma.EnumSizeFilter<"ProductVariant"> | $Enums.Size;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    productId?: Prisma.StringFilter<"ProductVariant"> | string;
};
export type ProductVariantCreateManyProductInput = {
    sku?: string;
    size: $Enums.Size;
    stock: number;
};
export type ProductVariantUpdateWithoutProductInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUpdateManyWithoutVariantNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutProductInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutVariantNestedInput;
};
export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.EnumSizeFieldUpdateOperationsInput | $Enums.Size;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductVariantCountOutputType = {
    orderItems: number;
};
export type ProductVariantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductVariantCountOutputTypeCountOrderItemsArgs;
};
export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductVariantCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ProductVariantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    sku?: boolean;
    size?: boolean;
    stock?: boolean;
    productId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.ProductVariant$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductVariantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    sku?: boolean;
    size?: boolean;
    stock?: boolean;
    productId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    sku?: boolean;
    size?: boolean;
    stock?: boolean;
    productId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectScalar = {
    sku?: boolean;
    size?: boolean;
    stock?: boolean;
    productId?: boolean;
};
export type ProductVariantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"sku" | "size" | "stock" | "productId", ExtArgs["result"]["productVariant"]>;
export type ProductVariantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.ProductVariant$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductVariantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductVariantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductVariant";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        sku: string;
        size: $Enums.Size;
        stock: number;
        productId: string;
    }, ExtArgs["result"]["productVariant"]>;
    composites: {};
};
export type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload, S>;
export type ProductVariantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductVariantCountAggregateInputType | true;
};
export interface ProductVariantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'];
        meta: {
            name: 'ProductVariant';
        };
    };
    findUnique<T extends ProductVariantFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductVariantFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductVariantFindManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductVariantCreateArgs>(args: Prisma.SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductVariantCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductVariantDeleteArgs>(args: Prisma.SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductVariantUpdateArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductVariantUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductVariantUpsertArgs>(args: Prisma.SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductVariantCountArgs>(args?: Prisma.Subset<T, ProductVariantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductVariantCountAggregateOutputType> : number>;
    aggregate<T extends ProductVariantAggregateArgs>(args: Prisma.Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>;
    groupBy<T extends ProductVariantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductVariantGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductVariantGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductVariantFieldRefs;
}
export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItems<T extends Prisma.ProductVariant$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariant$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductVariantFieldRefs {
    readonly sku: Prisma.FieldRef<"ProductVariant", 'String'>;
    readonly size: Prisma.FieldRef<"ProductVariant", 'Size'>;
    readonly stock: Prisma.FieldRef<"ProductVariant", 'Int'>;
    readonly productId: Prisma.FieldRef<"ProductVariant", 'String'>;
}
export type ProductVariantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductVariantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductVariantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantCreateInput, Prisma.ProductVariantUncheckedCreateInput>;
};
export type ProductVariantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductVariantCreateManyInput | Prisma.ProductVariantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    data: Prisma.ProductVariantCreateManyInput | Prisma.ProductVariantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductVariantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantUpdateInput, Prisma.ProductVariantUncheckedUpdateInput>;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyInput>;
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
};
export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyInput>;
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
    include?: Prisma.ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductVariantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateInput, Prisma.ProductVariantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductVariantUpdateInput, Prisma.ProductVariantUncheckedUpdateInput>;
};
export type ProductVariantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
};
export type ProductVariant$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type ProductVariantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
};
export {};
