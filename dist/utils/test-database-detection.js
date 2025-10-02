#!/usr/bin/env tsx
import { detectDatabase, detectDatabaseWithDialect, detectAllDatabases } from './database-detection.js';
async function testDatabaseDetection() {
    console.log('🔍 Testing Database Detection Utility\n');
    try {
        // Test basic detection
        console.log('1. Basic Database Detection:');
        const basicDetection = await detectDatabase();
        if (basicDetection) {
            console.log(`   ✅ Found: ${basicDetection.name} v${basicDetection.version}`);
        }
        else {
            console.log('   ❌ No database detected');
        }
        // Test enhanced detection with dialect
        console.log('\n2. Enhanced Database Detection (with dialect):');
        const enhancedDetection = await detectDatabaseWithDialect();
        if (enhancedDetection) {
            console.log(`   ✅ Database: ${enhancedDetection.name}`);
            console.log(`   📦 Version: ${enhancedDetection.version}`);
            console.log(`   🗄️  Dialect: ${enhancedDetection.dialect}`);
            console.log(`   🔌 Adapter: ${enhancedDetection.adapter}`);
        }
        else {
            console.log('   ❌ No database detected');
        }
        // Test detection of all databases
        console.log('\n3. All Databases Detection:');
        const allDatabases = await detectAllDatabases();
        if (allDatabases.length > 0) {
            console.log(`   ✅ Found ${allDatabases.length} database(s):`);
            allDatabases.forEach((db, index) => {
                console.log(`   ${index + 1}. ${db.name} v${db.version} (${db.dialect})`);
            });
        }
        else {
            console.log('   ❌ No databases detected');
        }
    }
    catch (error) {
        console.error('❌ Error during detection:', error);
    }
}
// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    testDatabaseDetection();
}
export { testDatabaseDetection };
//# sourceMappingURL=test-database-detection.js.map