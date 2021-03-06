/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import HomePage from './pages/HomePage';
import TenantsPage from './pages/Tenants';
import TenantPageDetails from './pages/TenantDetails';
import QueryPage from './pages/Query';
import SegmentDetails from './pages/SegmentDetails';
import InstanceDetails from './pages/InstanceDetails';
import ZookeeperPage from './pages/ZookeeperPage';

export default [
  { path: "/", Component: HomePage },
  { path: "/query", Component: QueryPage },
  { path: "/tenants/:tenantName", Component: TenantsPage },
  { path: "/tenants/:tenantName/table/:tableName", Component: TenantPageDetails },
  { path: "/tenants/:tenantName/table/:tableName/:segmentName", Component: SegmentDetails },
  { path: "/instance/:instanceName", Component: InstanceDetails },
  { path: "/instance/:instanceName/table/:tableName", Component: TenantPageDetails },
  { path: "/instance/:instanceName/table/:tableName/:segmentName", Component: SegmentDetails },
  { path: "/zookeeper", Component: ZookeeperPage },
];