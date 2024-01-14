import React from "react";

import {
  BlockStack,
  useBreakpoints,
  Text,
  Badge,
  IndexTable,
  Card,
  Button,
} from "@shopify/polaris";

const CustomerTable = () => {
  const customers = [
    {
      id: "1",
      first_name: "David",
      last_name: "Nguyen",
      email: "test@gmail.com",
      addresses: "HCM City",
      isDeactivate: <Badge tone="success">Activate</Badge>,
    },
    {
      id: "2",
      first_name: "John",
      last_name: "Son",
      email: "test1@gmail.com",
      addresses: "HN City",
      isDeactivate: <Badge tone="critical">Deactivate</Badge>,
    },
  ];

  const rowMarkup = customers.map(
    ({ id, first_name, last_name, email, addresses, isDeactivate }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        // selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {first_name + last_name}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{email}</IndexTable.Cell>
        <IndexTable.Cell>{addresses}</IndexTable.Cell>
        <IndexTable.Cell>{isDeactivate}</IndexTable.Cell>
        <IndexTable.Cell>
          {<Button variant="primary">Deactive</Button>}
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <BlockStack>
      <ui-title-bar title="Customers Management" />
      <Card>
        <IndexTable
          condensed={useBreakpoints().smDown}
          itemCount={customers.length}
          // selectedItemsCount={
          //   allResourcesSelected ? "All" : selectedResources.length
          // }
          // onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Customer name" },
            { title: "Email" },
            { title: "Location" },
            { title: "Status status" },
            { title: "Action" },
          ]}
          lastColumnSticky
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </BlockStack>
  );
};

export default CustomerTable;
