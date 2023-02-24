curl 'https://graphql.api.staging.niftory.com' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'X-Niftory-API-Key: abc' \
-H 'Authorization: Bearer abc' \
--compressed --data-binary '{"query":"{\n\t__schema{\n queryType {\n fields{\n name\n }\n }\n }\n}"}'
